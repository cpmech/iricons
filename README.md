# Ion React Icons in TypeScript

See all icons here: https://cpmech.github.io/iricons/

## Installation

### Option A

[Grab each icon](https://github.com/cpmech/iricons/tree/main/src/svgs/assets) individually and add it to your project. [The above link also helps the selection](https://cpmech.github.io/iricons/).0

### Option B

```bash
npm install @cpmech/iricons
```

## Usage

```typescript
import { IconSync } from '@cpmech/iricons/IconSync';

export const MyComponent: React.FC = () => (
  <div>
    <IconSync size="100%" />
  </div>
);
```
