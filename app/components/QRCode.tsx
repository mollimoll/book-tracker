import { Ecc, QrCode } from "../utils/qrcodegen";

export const QRCode = ({
  url,
  border = 1,
  lightColor = "white",
  darkColor = "black",
  className,
}: {
  url: string;
  border?: number;
  lightColor?: string;
  darkColor?: string;
  className?: string;
}) => {
  const qr = QrCode.encodeText(url, Ecc.HIGH);
  const viewBox = qr.size + border * 2;
  const paths: string[] = [];
  for (let y = 0; y < qr.size; y++) {
    for (let x = 0; x < qr.size; x++) {
      if (qr.getModule(x, y))
        paths.push(`M${x + border},${y + border}h1v1h-1z`);
    }
  }

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      stroke="none"
    >
      <rect width="100%" height="100%" fill={lightColor} />
      <path d={paths.join(" ")} fill={darkColor} />
    </svg>
  );
};
