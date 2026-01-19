# Progressive Blur Style

Advanced layered blur effects for web elements. Create iOS/Windows-style blur overlays with multiple customizable layers.

## Features

- **4-Layer System** - Blur, Luminosity, Tint, and Noise layers
- **Advanced Tint System** - Solid colors or linear gradients with individual opacity
- **Custom Cubic-Bezier Curves** - Full curve customization for feathering
- **Luminosity Layer** - Brightness, contrast, saturation adjustments
- **Noise Layer** - Grain effects like Windows blur
- **High Performance** - Uses CSS backdrop-filter and mask

## Installation

```bash
npm install progressive-blur-style
```

Or include the script directly in your HTML:

```html
<script src="progressive-blur-style.js"></script>
```

## Quick Start

### HTML Structure

```html
<div class="container">
  <div class="blur-overlay" id="myBlur"></div>
</div>
```

### CSS Setup

```css
.container {
  position: relative;
  background-image: url('your-image.jpg');
  background-size: cover;
  width: 100%;
  height: 400px;
}

.blur-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

### JavaScript

```javascript
progressiveBlurStyle(document.getElementById('myBlur'), {
  blur: {
    enabled: true,
    direction: 'bottom',
    height: '50%',
    maxBlur: 200
  },
  tint: {
    enabled: true,
    color: '#ffffff',
    opacity: 0.1
  }
});
```

## API Reference

### Main Function

```javascript
progressiveBlurStyle(target, options)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `target` | HTMLElement | Target DOM element for blur overlay |
| `options` | Object | Configuration options |

### Options Structure

```javascript
{
  blur: { /* Blur layer settings */ },
  luminosity: { /* Luminosity layer settings */ },
  tint: { /* Tint layer settings */ },
  noise: { /* Noise layer settings */ }
}
```

## Layer Options

### Blur Layer

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | Boolean | `true` | Enable/disable blur |
| `direction` | String | `'bottom'` | `'top'`, `'bottom'`, `'left'`, `'right'` |
| `height` | String | `'60%'` | Height of blur area |
| `layers` | Number | `8` | Number of blur layers (3-20) |
| `maxBlur` | Number | `40` | Maximum blur in pixels |
| `startOpacity` | Number | `0` | Starting opacity (0-1) |
| `endOpacity` | Number | `1` | Ending opacity (0-1) |
| `position` | String | `'bottom'` | `'top'` or `'bottom'` |
| `curve` | Array/String | `[0.25, 0.46, 0.45, 0.94]` | Cubic-bezier or preset |

### Luminosity Layer

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | Boolean | `false` | Enable/disable |
| `brightness` | Number | `1.1` | Brightness (0-2) |
| `contrast` | Number | `1.05` | Contrast (0-2) |
| `saturate` | Number | `1.2` | Saturation (0-3) |
| `opacity` | Number | `0.8` | Layer opacity |
| `blendMode` | String | `'normal'` | CSS blend mode |

### Tint Layer

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | Boolean | `false` | Enable/disable |
| `color` | String | `'#ffffff'` | Solid color |
| `gradient` | Object | `null` | Gradient configuration |
| `opacity` | Number | `0.1` | Layer opacity |
| `blendMode` | String | `'overlay'` | CSS blend mode |

### Noise Layer

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | Boolean | `false` | Enable/disable |
| `opacity` | Number | `0.3` | Layer opacity |
| `blendMode` | String | `'multiply'` | CSS blend mode |

## Examples

### iOS Style

```javascript
progressiveBlurStyle(element, {
  blur: {
    enabled: true,
    direction: 'top',
    height: '40%',
    layers: 6,
    maxBlur: 130,
    position: 'top',
    curve: [0.62, 0.123, 0.92, 0.002]
  },
  luminosity: {
    enabled: true,
    brightness: 1,
    contrast: 1.2,
    saturate: 1.3
  },
  tint: {
    enabled: true,
    color: '#000000',
    opacity: 0.75
  }
});
```

### Windows Blur

```javascript
progressiveBlurStyle(element, {
  blur: {
    enabled: true,
    height: '100%',
    layers: 4,
    maxBlur: 200,
    startOpacity: 1,
    endOpacity: 1,
    curve: 'linear'
  },
  luminosity: {
    enabled: true,
    brightness: 1.1,
    saturate: 1.2
  },
  noise: {
    enabled: true,
    opacity: 1,
    blendMode: 'overlay'
  }
});
```

### Glass Morphism

```javascript
progressiveBlurStyle(element, {
  blur: {
    enabled: true,
    height: '33%',
    layers: 3,
    maxBlur: 300,
    curve: [0.09, 0.93, 0.7, 0.01]
  }
});
```

## Update and Destroy

```javascript
const blurEffect = progressiveBlurStyle(element, options);

// Update settings
blurEffect.update({
  blur: { maxBlur: 300 }
});

// Remove effect
blurEffect.destroy();
```

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 76+ |
| Firefox | 103+ |
| Safari | 14+ |
| Edge | 79+ |

Requires `backdrop-filter` support.

## License

MIT License
