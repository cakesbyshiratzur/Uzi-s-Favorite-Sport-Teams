# Read and encode the logo file
$bytes = [System.IO.File]::ReadAllBytes("C:\Uzi\Uzi's Teams Sport\public\logo.jpg")
$base64 = [Convert]::ToBase64String($bytes)

# Save to file
Set-Content -Path "C:\Uzi\Uzi's Teams Sport\logo_clean_base64.txt" -Value $base64 -NoNewline

Write-Host "Base64 content length: $($base64.Length)"
Write-Host "First 100 chars: $($base64.Substring(0, 100))"

