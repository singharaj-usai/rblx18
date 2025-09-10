// Version Compatibility API
import { HttpService } from '@rbxts/services';

interface SecurityVersions {
  allowedSecurityVersions: string[];
  allowedMD5Hashes: string[];
}

const securityVersions: SecurityVersions = {
  allowedSecurityVersions: [
    "0.1.2",
    "0.1.3",
    "0.1.4",
    "0.2.0",
    "0.2.1",
    "0.3.0"
  ],
  allowedMD5Hashes: [
    "d41d8cd98f00b204e9800998ecf8427e",
    "e10adc3949ba59abbe56e057f20f883e",
    "098f6bcd4621d373cade4e832627b4f6",
    "21232f297a57a5a743894a0e4a801fc3"
  ]
};

// Function to get allowed security versions
export function getAllowedSecurityVersions(): string {
  return HttpService.JSONEncode(securityVersions.allowedSecurityVersions);
}

// Function to get allowed MD5 hashes
export function getAllowedMD5Hashes(): string {
  return HttpService.JSONEncode(securityVersions.allowedMD5Hashes);
}

// Export the security versions object
export default securityVersions;