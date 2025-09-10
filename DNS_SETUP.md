# DNS Configuration Guide for rblx18.com

## Required DNS Records

Add the following DNS records to your domain registrar's DNS settings:

### A Records
```
www.rblx18.com             A     <YOUR_SERVER_IP>
rblx18.com                 A     <YOUR_SERVER_IP>
clientsettings.api.rblx18.com    A     <YOUR_SERVER_IP>
versioncompatibility.api.rblx18.com    A     <YOUR_SERVER_IP>
```

### CNAME Records (Alternative Setup)
```
clientsettings.api    CNAME    www.rblx18.com
versioncompatibility.api    CNAME    www.rblx18.com
```

## Local Testing

For local development, add these entries to your hosts file:

### Windows (`C:\Windows\System32\drivers\etc\hosts`)
```
127.0.0.1    www.rblx18.com
127.0.0.1    rblx18.com
127.0.0.1    clientsettings.api.rblx18.com
127.0.0.1    versioncompatibility.api.rblx18.com
```

### Linux/macOS (`/etc/hosts`)
```
127.0.0.1    www.rblx18.com
127.0.0.1    rblx18.com
127.0.0.1    clientsettings.api.rblx18.com
127.0.0.1    versioncompatibility.api.rblx18.com
```

## Verification

To verify your DNS setup:

1. Use `nslookup` or `dig` to check DNS resolution:
```bash
nslookup clientsettings.api.rblx18.com
nslookup versioncompatibility.api.rblx18.com
```

2. Test API endpoints:
```bash
curl http://clientsettings.api.rblx18.com/Setting/QuietGet/RCCService
curl https://versioncompatibility.api.rblx18.com/GetAllowedSecurityVersions
```

## Troubleshooting

1. Clear DNS cache after making changes:
   - Windows: `ipconfig /flushdns`
   - Linux: `sudo systemd-resolve --flush-caches`
   - macOS: `sudo killall -HUP mDNSResponder`

2. Ensure your web server is configured to handle requests for these domains

3. Check firewall rules allow traffic on ports 80 (HTTP) and 443 (HTTPS)