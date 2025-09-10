// Test file for ClientAppSettings

import clientAppSettings, { getClientAppSettings, getClientAppSetting } from './index';

// Test direct access to the settings object
const directAccess = clientAppSettings.FFlagNewPlayerListScript;
console.log('Direct access to FFlagNewPlayerListScript:', directAccess);

// Test getting a specific setting
const specificSetting = getClientAppSetting('FFlagLuaDebugger');
console.log('Specific setting FFlagLuaDebugger:', specificSetting);

// Test getting all settings as JSON
const allSettings = getClientAppSettings();
console.log('All settings as JSON:', allSettings);

// Test accessing a setting that doesn't exist
const nonExistentSetting = getClientAppSetting('NonExistentFlag');
console.log('Non-existent setting:', nonExistentSetting); // Should be undefined