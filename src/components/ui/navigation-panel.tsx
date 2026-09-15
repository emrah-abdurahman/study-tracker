import { Folder } from '@/models/folder'

import styles from './navigation-panel.module.css'

export interface NavigationPanelProps {
  currentFolderId: number | null
  updateCurrentFolderId: (id: number | null) => void
  folders: Folder[]
}

export default function NavigationPanel({ currentFolderId, updateCurrentFolderId, folders }: NavigationPanelProps) {
  return (<section className={styles.navigationPanel}>
    <p>Navigation Panel</p>
    {folders.map(folder => {
      return (
        <button
          key={folder.id}
          className={styles.navigationFolder}
          type='button'
          onDoubleClick={() => { updateCurrentFolderId(folder.id) }}>
          {folder.name}
        </button>
      )
    })}
  </section>
  )
}