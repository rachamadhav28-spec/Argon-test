package com.argon.githubagent

object GitHubBatchService {
    const val MIN_BATCH_SIZE = 20
    const val MAX_BATCH_SIZE = 100
    const val GITHUB_API_BASE = "https://api.github.com"

    fun buildContentsUrl(ownerRepo: String, targetPath: String): String {
        val cleanPath = targetPath.trimStart('/')
        return "$GITHUB_API_BASE/repos/$ownerRepo/contents/$cleanPath"
    }
}
