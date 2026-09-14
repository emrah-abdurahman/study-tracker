import { Bookmark } from '@/models/bookmark'
import { Folder } from '@/models/folder'

export interface FolderTreeNode extends Folder {
  children: FolderTreeNode[]
  bookmarks: Bookmark[]
}

export function buildTree(folders: Folder[], bookmarks: Bookmark[]): FolderTreeNode[] {
  const tree = new Map<number, FolderTreeNode>()
  const rootLevelFolderNodes: FolderTreeNode[] = []

  for (const folder of folders) {
    tree.set(folder.id,
      {
        id: folder.id,
        name: folder.name,
        parentFolderId: folder.parentFolderId,
        children: [],
        bookmarks: []
      })
  }

  for (const bookmark of bookmarks) {
    const folderId = bookmark.folderId
    const updatedFolderData = tree.get(folderId)
    updatedFolderData?.bookmarks.push(bookmark)
  }

  for (const folder of folders) {
    const childFolderNode = tree.get(folder.id);

    if (folder.parentFolderId) {
      const parentFolderNode = tree.get(folder.parentFolderId);

      if (parentFolderNode && childFolderNode) {
        parentFolderNode.children.push(childFolderNode);
      }
    } else {
      if (childFolderNode) {
        rootLevelFolderNodes.push(childFolderNode);
      }
    }
  }

  return rootLevelFolderNodes
}