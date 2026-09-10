
Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\RAMEEZ\.gemini\antigravity-ide\brain\cc8176f6-806d-400c-a31a-d63438919646\.user_uploaded\media_1789026442857.png"
$destPath = "c:\Users\RAMEEZ\OneDrive\Desktop\Speed Desert\public\WhatsApp Image 2026-09-10 at 11.40.30 AM.jpeg"

$srcImg = [System.Drawing.Bitmap]::FromFile($srcPath)

# Detect actual photo bounds by scanning pixels not matching dark background (approx RGB 30,30,30 or less)
$minX = $srcImg.Width
$maxX = 0
$minY = $srcImg.Height
$maxY = 0

for ($y = 0; $y -lt $srcImg.Height; $y++) {
    for ($x = 0; $x -lt $srcImg.Width; $x++) {
        $pixel = $srcImg.GetPixel($x, $y)
        # Background is dark grey/black (R, G, B < 45) and header text
        # The photo has bright sky or sand (R > 60 or G > 60 or B > 60)
        if (($pixel.R -gt 50 -or $pixel.G -gt 50 -or $pixel.B -gt 50) -and $y -gt 35) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Output "Detected bounds: X: $minX to $maxX, Y: $minY to $maxY"

$cropW = $maxX - $minX + 1
$cropH = $maxY - $minY + 1

$rect = New-Object System.Drawing.Rectangle($minX, $minY, $cropW, $cropH)
$cropped = $srcImg.Clone($rect, $srcImg.PixelFormat)

$srcImg.Dispose()
$cropped.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$cropped.Dispose()
Write-Output "Clean photo saved successfully!"
