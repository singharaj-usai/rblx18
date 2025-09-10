// RCCService ClientAppSettings API
import { HttpService } from '@rbxts/services';

interface RCCServiceSettings {
  [key: string]: string;
}

const rccServiceSettings: RCCServiceSettings = {
  DFIntTaskSchedulerTargetFps: "60",
  FFlagHandleAltEnterFullscreen: "False",
  DFIntS2PhysicsSenderRate: "250",
  FFlagDebugDisableOTAMaterialTexture: "True",
  FFlagFixGraphicsQuality: "True",
  FFlagDisableNewIGMinDUA: "True",
  DFFlagDebugPauseVoxelizer: "True",
  FFlagEnableQuickGameLaunch: "False",
  FFlagPreloadAllFonts: "True",
  FFlagRenderEnableGlobalInstancing: "True",
  FFlagUseSystemVideoMemory: "True",
  DFFlagAvatarChatServiceEnabled: "False",
  FFlagAudioUseCSGv2: "True",
  FFlagDebugForceFutureIsBrightPhase3: "True",
  FFlagEnableInGameMenuV3: "False",
  FFlagFacialAnimationStreamingServiceEnabled: "False",
  FFlagVoiceChatServiceEnabled: "False",
  FFlagEnableV3MenuABTest2: "False",
  DFFlagEnableMemProfilingOutsideClient: "False",
  FFlagLuaAppSystemBar: "False",
  FFlagSetCoreAllowAnimationEvents: "True",
  FFlagDebugAnimateOnlyWhenVisible: "True",
  FFlagEnableInGameMenuControls: "False",
  FFlagEnableMenuModernizationABTest2: "False",
  FFlagEnableMenuModernizationABTest3: "False",
  FFlagHandleAltEnterFullscreenClient: "False",
  FFlagLoadCoreScriptsFromPatchOnly: "True",
  FFlagNewLightAttenuation: "True",
  FFlagSystemAnimatorBackgroundThread: "True",
  FFlagUseNewCameraSystem: "True",
  FFlagUsePagingAnimationTrack2: "True",
  FFlagUseRadianceAO: "True",
  FFlagVoxelizerDisableTerrainSplit: "True",
  FFlagEnableMenuControlsABTest: "False",
  FFlagDebugDisableOTAMaterialSystem: "True",
  FFlagEnableQueuedMessageProcessing: "True",
  FFlagRenderCheckThreading: "True",
  FFlagRenderEnableClipmaps: "True",
  FFlagRenderEnableMaterialCaching: "True",
  FFlagRenderIncrementalMeshLoading: "True",
  FFlagRenderIncrementalMeshLoadingPerFrame: "True",
  FFlagRenderIncrementalMeshLoadingPerFrameRender: "True",
  FFlagRenderIncrementalMeshLoadingRender: "True",
  FFlagRenderIncrementalMeshLoadingRenderBackground: "True",
  FFlagRenderIncrementalMeshLoadingRenderBackgroundPerFrame: "True",
  FFlagRenderIncrementalMeshLoadingRenderPerFrame: "True",
  FFlagRenderIncrementalMeshLoadingRenderPerFrameBackground: "True",
  FFlagRenderIncrementalMeshLoadingRenderPerFrameBackgroundPerFrame: "True",
  FFlagRenderIncrementalMeshLoadingRenderPerFramePerFrame: "True",
  FFlagRenderIncrementalMeshLoadingRenderPerFramePerFrameBackground: "True",
  FFlagRenderIncrementalMeshLoadingRenderPerFramePerFrameBackgroundPerFrame: "True",
  FFlagRenderIncrementalMeshLoadingRenderPerFramePerFramePerFrame: "True",
  FFlagRenderIncrementalMeshLoadingRenderPerFramePerFramePerFrameBackground: "True",
  FFlagRenderIncrementalMeshLoadingRenderPerFramePerFramePerFrameBackgroundPerFrame: "True",
  FFlagRenderIncrementalMeshLoadingRenderPerFramePerFramePerFramePerFrame: "True"
};

// Function to get the settings as a JSON string
export function getRCCServiceSettings(): string {
  return HttpService.JSONEncode(rccServiceSettings);
}

// Function to get a specific setting
export function getRCCServiceSetting(key: string): string | undefined {
  return rccServiceSettings[key];
}

// Export the settings object
export default rccServiceSettings;