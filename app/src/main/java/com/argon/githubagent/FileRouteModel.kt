package com.argon.githubagent

data class FileRouteModel(
    val id: String,
    val fileName: String,
    val targetRepoPath: String,
    val content: String,
    val lineCount: Int,
    val language: String
)
