/**
 * 이미지에서 메인 색상을 추출하는 함수
 * Canvas API를 사용하여 이미지의 픽셀 데이터를 분석하고
 * 가장 많이 나타나는 색상 또는 평균 색상을 반환합니다.
 */

interface RGB {
  r: number
  g: number
  b: number
}

/**
 * 이미지 URL에서 메인 색상을 추출합니다.
 * @param imageUrl - 추출할 이미지의 URL
 * @param options - 추출 옵션
 * @returns RGB 색상 객체 또는 null (실패 시)
 */
export async function extractImageMainColor(
  imageUrl: string,
  options?: {
    /**
     * 샘플링 크기 (성능 최적화를 위해 이미지를 축소할 크기)
     * 기본값: 50 (50x50 픽셀로 샘플링)
     */
    sampleSize?: number
    /**
     * 색상 추출 방식
     * - 'dominant': 가장 많이 나타나는 색상
     * - 'average': 평균 색상
     * 기본값: 'dominant'
     */
    method?: 'dominant' | 'average'
  },
): Promise<RGB | null> {
  const { sampleSize = 50, method = 'dominant' } = options || {}

  try {
    // 이미지 로드
    const img = new Image()
    img.crossOrigin = 'anonymous'

    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve()
      img.onerror = () => reject(new Error('Failed to load image'))
      img.src = imageUrl
    })

    // Canvas 생성 및 이미지 그리기
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) {
      return null
    }

    // 샘플링 크기로 캔버스 크기 설정
    canvas.width = sampleSize
    canvas.height = sampleSize

    // 이미지를 캔버스에 그리기
    ctx.drawImage(img, 0, 0, sampleSize, sampleSize)

    // 픽셀 데이터 가져오기
    const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize)
    const pixels = imageData.data

    if (method === 'average') {
      return extractAverageColor(pixels)
    } else {
      return extractDominantColor(pixels)
    }
  } catch (error) {
    console.error('Error extracting image color:', error)
    return null
  }
}

/**
 * 평균 색상을 추출합니다.
 */
function extractAverageColor(pixels: Uint8ClampedArray): RGB {
  let r = 0
  let g = 0
  let b = 0
  let count = 0

  // RGBA 형식이므로 4개씩 건너뛰며 처리
  for (let i = 0; i < pixels.length; i += 4) {
    const alpha = pixels[i + 3]

    // 투명한 픽셀은 제외
    if (alpha < 128) {
      continue
    }

    r += pixels[i]
    g += pixels[i + 1]
    b += pixels[i + 2]
    count++
  }

  if (count === 0) {
    return { r: 255, g: 255, b: 255 } // 기본값: 흰색
  }

  return {
    r: Math.round(r / count),
    g: Math.round(g / count),
    b: Math.round(b / count),
  }
}

/**
 * 가장 많이 나타나는 색상을 추출합니다.
 * 색상을 그룹화하여 가장 빈도가 높은 색상을 반환합니다.
 */
function extractDominantColor(pixels: Uint8ClampedArray): RGB {
  const colorMap = new Map<string, number>()

  // 색상을 그룹화 (정밀도를 낮춰서 유사한 색상을 묶음)
  const precision = 10 // 0-255 범위를 10단위로 그룹화

  for (let i = 0; i < pixels.length; i += 4) {
    const alpha = pixels[i + 3]

    // 투명한 픽셀은 제외
    if (alpha < 128) {
      continue
    }

    const r = Math.floor(pixels[i] / precision) * precision
    const g = Math.floor(pixels[i + 1] / precision) * precision
    const b = Math.floor(pixels[i + 2] / precision) * precision

    const colorKey = `${r},${g},${b}`
    colorMap.set(colorKey, (colorMap.get(colorKey) || 0) + 1)
  }

  if (colorMap.size === 0) {
    return { r: 255, g: 255, b: 255 } // 기본값: 흰색
  }

  // 가장 많이 나타나는 색상 찾기
  let maxCount = 0
  let dominantColor = '255,255,255'

  colorMap.forEach((count, color) => {
    if (count > maxCount) {
      maxCount = count
      dominantColor = color
    }
  })

  const [r, g, b] = dominantColor.split(',').map(Number)

  return { r, g, b }
}

/**
 * RGB 객체를 hex 문자열로 변환합니다.
 * @param rgb - RGB 색상 객체
 * @returns hex 색상 문자열 (예: "#ff0000")
 */
export function rgbToHex(rgb: RGB): string {
  const toHex = (value: number) => {
    const hex = value.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`
}

/**
 * RGB 객체를 rgba 문자열로 변환합니다.
 * @param rgb - RGB 색상 객체
 * @param alpha - 투명도 (0-1)
 * @returns rgba 색상 문자열 (예: "rgba(255, 0, 0, 0.5)")
 */
export function rgbToRgba(rgb: RGB, alpha: number = 1): string {
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
}
