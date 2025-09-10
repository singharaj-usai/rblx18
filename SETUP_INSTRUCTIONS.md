# Setup Instructions for RCCService

## 1. Update Hosts File

Add the following entries to your hosts file (`C:\Windows\System32\drivers\etc\hosts`):

```
127.0.0.1    clientsettings.api.rblx18.com
127.0.0.1    versioncompatibility.api.rblx18.com
127.0.0.1    www.rblx18.com
127.0.0.1    rblx18.com
```

## 2. Start the Server

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm run start
```

## 3. Run RCCService

Run RCCService with these parameters:
```bash
RCCService.exe -Content:../../../content -Console -verbose -placeid:1818 -port 64989
```

## 4. Verify Setup

Test the endpoints:
1. http://clientsettings.api.rblx18.com/Setting/QuietGet/RCCService
2. http://versioncompatibility.api.rblx18.com/GetAllowedSecurityVersions
3. http://versioncompatibility.api.rblx18.com/GetAllowedMD5Hashes

## Troubleshooting

1. If you get permission errors when starting the server:
   - Run the command prompt as administrator
   - Use a different port (e.g., 8080) and update the hosts file accordingly

2. If DNS resolution fails:
   - Verify hosts file entries are correct
   - Flush DNS cache: `ipconfig /flushdns`
   - Restart your computer

3. If RCCService fails to connect:
   - Ensure the server is running
   - Check if the ports are not blocked by firewall
   - Verify the API endpoints are accessible