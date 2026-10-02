type PhotoProps = {
  src: string;
  className?: string;
  /** 画像が読み込めない場合のグラデーション */
  fallback?: string;
};

/**
 * 装飾用の写真。CSS背景で表示し、画像が読み込めない場合もグラデーションで成立するようにしています。
 */
export function Photo({
  src,
  className = "",
  fallback = "linear-gradient(135deg, #1d4f55 0%, #0e6a6c 45%, #5fc4c0 100%)",
}: PhotoProps) {
  return (
    <div
      className={`photo ${className}`.trim()}
      style={{ backgroundImage: `url("${src}"), ${fallback}` }}
      aria-hidden="true"
    />
  );
}
