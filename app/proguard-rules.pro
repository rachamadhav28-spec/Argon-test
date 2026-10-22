# Keep JavascriptInterface methods for AndroidBridge
-keepclassmembers class com.argon.githubagent.AndroidNativeBridge {
    @android.webkit.JavascriptInterface <methods>;
}
