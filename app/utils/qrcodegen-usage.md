# QR Code Generator - Usage Guide

This library has been refactored from TypeScript namespaces to ES module exports. If you're referencing the [original library docs](https://www.nayuki.io/page/qr-code-generator-library), note the following differences.

## Import style

The original docs show global namespace access:

```ts
// OLD (namespace-based)
const QRC = qrcodegen.QrCode;
const qr = QRC.encodeText("Hello", qrcodegen.QrCode.Ecc.LOW);
```

Use ES module imports instead:

```ts
// NEW (module-based)
import { QrCode, QrSegment, Ecc, Mode } from "./utils/qrcodegen";
const qr = QrCode.encodeText("Hello", Ecc.LOW);
```

## Key differences

| Docs (namespace)               | Refactored (module)          |
| ------------------------------ | ---------------------------- |
| `qrcodegen.QrCode`             | `QrCode` (direct import)     |
| `qrcodegen.QrSegment`          | `QrSegment` (direct import)  |
| `qrcodegen.QrCode.Ecc.LOW`     | `Ecc.LOW` (standalone class) |
| `qrcodegen.QrCode.Ecc.MEDIUM`  | `Ecc.MEDIUM`                 |
| `qrcodegen.QrSegment.Mode.BYTE`| `Mode.BYTE` (standalone class)|
| `qrcodegen.QrSegment.Mode.NUMERIC` | `Mode.NUMERIC`           |

`Ecc` and `Mode` are no longer nested under `QrCode` and `QrSegment` — they are top-level exports. All method signatures and behavior remain identical.
