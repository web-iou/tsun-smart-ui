import { useState, useCallback } from "react";

export interface UploadOptions {
  apiUrl: string;
  name?: string;
  headers?: Record<string, string>;
  timeout?: number; // 超时时间，单位毫秒
}
export interface RNFile {
  uri: string;
  name: string;
  type: string;
}
export default function useUpload<T = any>(options: UploadOptions) {
  const { apiUrl, name = "file", headers = {}, timeout = 1000*10 } = options; 
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const startUpload = useCallback(
    (file: RNFile) => {
      return new Promise<T>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", apiUrl);
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });

        // 设置超时
        xhr.timeout = timeout;

        // 上传进度监听
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            setProgress(Math.floor((event.loaded / event.total) * 100));
          }
        };

        xhr.onload = () => {
          setUploading(false);
          setProgress(100); // 上传完成
          try {
            resolve(JSON.parse(xhr.response));
          } catch {
            resolve(xhr.responseText as unknown as T);
          }
        };

        xhr.onerror = () => {
          setUploading(false);
          setProgress(0);
          reject(new Error("Upload failed"));
        };

        // 超时处理
        xhr.ontimeout = () => {
          setUploading(false);
          setProgress(0);
          reject(new Error(`Upload timeout after ${timeout}ms`));
        };

        // 请求被中止处理
        xhr.onabort = () => {
          setUploading(false);
          setProgress(0);
          reject(new Error("Upload aborted"));
        };

        const formData = new FormData();
        formData.append(name, file);
        xhr.send(formData);

        setUploading(true);
        setProgress(0);
      });
    },
    [apiUrl, name, headers, timeout],
  );
  return { uploading, progress, startUpload };
}
