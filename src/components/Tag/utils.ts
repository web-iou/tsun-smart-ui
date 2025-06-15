// Tag类型定义
export type TagType = "success" | "error" | "info" | "warning";

// 颜色映射接口
interface TagColors {
  backgroundColor: string;
  textColor: string;
}

type ThemeColors = Record<
  TagType,
  {
    primary: string;
    light: string;
  }
>;

/**
 * 根据Tag类型获取对应的颜色配置
 * @param type Tag类型
 * @param colors 主题颜色配置
 * @returns 包含背景色和文本色的对象
 */
export const getTagColors = (type: TagType, colors: ThemeColors): TagColors => {
  const colorMap: Record<TagType, TagColors> = {
    success: {
      backgroundColor: colors.success.light,
      textColor: colors.success.primary,
    },
    error: {
      backgroundColor: colors.error.light,
      textColor: colors.error.primary,
    },
    info: {
      backgroundColor: colors.info.light,
      textColor: colors.info.primary,
    },
    warning: {
      backgroundColor: colors.warning.light,
      textColor: colors.warning.primary,
    },
  };

  return colorMap[type];
};
