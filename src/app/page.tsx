'use client'

import { useState } from 'react'

import ApplicationContainer from '@/components/ui/application-container'
import ContentPanel from '@/components/ui/content-panel'
import NavigationPanel from '@/components/ui/navigation-panel'
import { MOCK_FOLDERS } from '@/data/mock-data'

export default function Home() {
  const [currentFolderId, setCurrentFolderId] = useState<number | null>(null)

  const updateCurrentFolderId = (id: number | null) => {
    setCurrentFolderId(id)
  }

  const folders = MOCK_FOLDERS.filter((folder) => folder.parentFolderId === currentFolderId)

  return (
    <ApplicationContainer>
      <NavigationPanel currentFolderId={currentFolderId} updateCurrentFolderId={updateCurrentFolderId} folders={folders} />
      <ContentPanel />
    </ApplicationContainer>
  )
}