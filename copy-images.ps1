# PowerShell script to copy images from Downloads to public/images
$downloads = "$env:USERPROFILE\Downloads"
$target = "$PSScriptRoot\public\images"

Write-Host "Copying images from Downloads to public/images..." -ForegroundColor Green

$images = @(
    "Hero1.avif",
    "hero2.jpg",
    "hero3.jpg",
    "DGPS Land Survey.webp",
    "Digital Land Survey.avif",
    "DTCP Layouts.webp",
    "Enjoyment Survey.avif",
    "Sub-division.webp",
    "Survey Number Demarcation.jpg",
    "Registration Plans & Location Sketch.avif",
    "Boundary Survey.webp",
    "Topographic Survey.webp",
    "Construction Surveys.webp",
    "Plot Demarcation.jpg",
    "Land Subdivision.avif"
)

foreach ($img in $images) {
    $source = Join-Path $downloads $img
    $dest = Join-Path $target $img
    
    if (Test-Path $source) {
        Copy-Item -Path $source -Destination $dest -Force
        Write-Host "Copied: $img" -ForegroundColor Green
    } else {
        Write-Host "Not found: $img" -ForegroundColor Yellow
    }
}

Write-Host "Done! Images copied to public/images/" -ForegroundColor Green