import { useState, useCallback } from "react";

export interface UploadOptions {
  apiUrl: string;
  name?: string;
  headers?: Record<string, string>;
}
export interface RNFile {
  uri: string;
  name: string;
  type: string;
}
export default function useUpload<T = any>(options: UploadOptions) {
  const { apiUrl, name = "file", headers = {} } = options;
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

        const formData = new FormData();
        formData.append(name, file);
        xhr.send(formData);

        setUploading(true);
        setProgress(0);
      });
    },
    [apiUrl, name, headers],
  );
  return { uploading, progress, startUpload };
}
