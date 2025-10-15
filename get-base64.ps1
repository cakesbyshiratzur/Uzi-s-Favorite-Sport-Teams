$bytes = [System.IO.File]::ReadAllBytes('public\logo.jpg')
$base64 = [Convert]::ToBase64String($bytes)
Write-Output $base64

