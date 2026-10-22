package com.argon.githubagent

import java.io.InputStream
import java.util.zip.ZipInputStream

object ZipExtractorHelper {
    fun listZipEntries(inputStream: InputStream): List<String> {
        val names = mutableListOf<String>()
        ZipInputStream(inputStream).use { zis ->
            var entry = zis.nextEntry
            while (entry != null) {
                if (!entry.isDirectory) {
                    names.add(entry.name)
                }
                zis.closeEntry()
                entry = zis.nextEntry
            }
        }
        return names
    }
}
