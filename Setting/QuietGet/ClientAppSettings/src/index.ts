// ClientAppSettings
// TypeScript

import { HttpService } from '@rbxts/services';

// Define the type for ClientAppSettings
interface ClientAppSettings {
  FFlagNewPlayerListScript: string;
  FFlagCoreScriptShowVisibleAgeV2: string;
  DFFlagFindFirstChildOfClassEnabled: string;
  FFlagStudioCSGAssets: string;
  FFlagCSGLoadBlocking: string;
  FFlagCSGPhysicsLevelOfDetailEnabled: string;
  FFlagFormFactorDeprecated: string;
  FFlagFontSmoothScalling: string;
  FFlagAlternateFontKerning: string;
  FFlagFontSourceSans: string;
  FFlagRenderNewFonts: string;
  FFlagDMFeatherweightEnabled: string;
  FFlagRenderFeatherweightEnabled: string;
  FFlagRenderFeatherweightUseGeometryGenerator: string;
  FFlagScaleExplosionLifetime: string;
  FFlagEnableNonleathalExplosions: string;
  DFFlagHttpCurlHandle301: string;
  FFlagSearchToolboxByDataModelSearchString: string;
  FFlagClientABTestingEnabled: string;
  [key: string]: string;
}

// Create the settings object with all the flags from the PHP file
const clientAppSettings: ClientAppSettings = {
  FFlagNewPlayerListScript: "True",
  FFlagCoreScriptShowVisibleAgeV2: "True",
  DFFlagFindFirstChildOfClassEnabled: "True",
  FFlagStudioCSGAssets: "True",
  FFlagCSGLoadBlocking: "False",
  FFlagCSGPhysicsLevelOfDetailEnabled: "True",
  FFlagFormFactorDeprecated: "False",
  FFlagFontSmoothScalling: "True",
  FFlagAlternateFontKerning: "True",
  FFlagFontSourceSans: "True",
  FFlagRenderNewFonts: "True",
  FFlagDMFeatherweightEnabled: "True",
  FFlagRenderFeatherweightEnabled: "True",
  FFlagRenderFeatherweightUseGeometryGenerator: "True",
  FFlagScaleExplosionLifetime: "True",
  FFlagEnableNonleathalExplosions: "True",
  DFFlagHttpCurlHandle301: "True",
  FFlagSearchToolboxByDataModelSearchString: "True",
  FFlagClientABTestingEnabled: "False",
  FFlagStudioSmoothTerrainForNewPlaces: "True",
  FFlagUsePGSSolver: "True",
  FFlagSimplifyKeyboardInputPath: "False",
  FFlagNewInGameDevConsole: "True",
  FFlagTextFieldUTF8: "True",
  FFlagTypesettersReleaseResources: "True",
  FFlagLuaBasedBubbleChat: "True",
  FFlagUseCanManageApiToDetermineConsoleAccess: "False",
  FFlagConsoleCodeExecutionEnabled: "True",
  DFFlagCustomEmitterInstanceEnabled: "True",
  FFlagCustomEmitterRenderEnabled: "True",
  FFlagCustomEmitterLuaTypesEnabled: "True",
  FFlagStudioInSyncWebKitAuthentication: "False",
  FFlagGlowEnabled: "True",
  FFlagUseNewAppBridgeInputWindows: "False",
  DFFlagUseNewFullscreenLogic: "True",
  FFlagRenderMaterialsOnMobile: "True",
  FFlagMaterialPropertiesEnabled: "True",
  FFlagSurfaceLightEnabled: "True",
  FFlagStudioPropertyErrorOutput: "True",
  DFFlagUseR15Character: "True",
  DFFlagEnableHipHeight: "True",
  DFFlagUseStarterPlayerCharacter: "True",
  DFFlagFilteringEnabledDialogFix: "True",
  FFlagCSGMeshColorToolsEnabled: "True",
  FFlagStudioEnableGameAnimationsTab: "True",
  DFFlagScriptExecutionContextApi: "True",
  FFlagStudioVariableIntellesense: "True",
  FFlagLuaDebugger: "True",
  FFlagUseUserListMenu: "True",
  FFlagEnableSetCoreTopbarEnabled: "True",
  FFlagPlayerDropDownEnabled: "True",
  FFlagSetCoreMoveChat: "True",
  FFlagSetCoreDisableChatBar: "True",
  FFlagGraphicsGL3: "True",
  DFFlagUserUseLuaVehicleController: "True",
  FFlagTextBoxUnicodeAware: "True",
  FFlagLetLegacyScriptsWork: "True",
  FFlagDep: "True",
  DFFlagDisableBackendInsertConnection: "True",
  FFlagPhysicsAnalyzerEnabled: "True",
  DFFlagGetGroupsAsyncEnabled: "True",
  DFFlagGetFocusedTextBoxEnabled: "True",
  DFFlagTextBoxIsFocusedEnabled: "True",
  DFFlagGetCharacterAppearanceEnabled: "True",
  FFlagNewLayoutAndConstraintsEnabled: "True"
  // Note: The original PHP file contains many more flags
  // Add more flags as needed
};

// Function to get the settings as a JSON string
export function getClientAppSettings(): string {
  return HttpService.JSONEncode(clientAppSettings);
}

// Function to get a specific setting
export function getClientAppSetting(key: string): string | undefined {
  return clientAppSettings[key];
}

// Export the settings object
export default clientAppSettings;