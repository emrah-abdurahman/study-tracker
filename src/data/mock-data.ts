import { Bookmark } from '@/models/bookmark'
import { Folder } from '@/models/folder'

export const MOCK_FOLDERS: Folder[] = [
  { id: 1, name: 'Studied', parentFolderId: null },
  { id: 2, name: 'To Study', parentFolderId: null },
  { id: 3, name: 'Software Engineering', parentFolderId: 2 },
  { id: 4, name: 'Software Development', parentFolderId: 3 },
  { id: 5, name: 'Programming Languages', parentFolderId: 4 },
  { id: 6, name: 'Python', parentFolderId: 5 }
]

export const MOCK_BOOKMARKS: Bookmark[] = [
  {
    id: 1,
    folderId: 6,
    webPageTitle: 'Understanding Inheritance and Polymorphism - What is Name Mangling and How Does it Work? | Learn | freeCodeCamp.org',
    webPageUrl: 'https://www.freecodecamp.org/learn/python-v9/lecture-understanding-inheritance-and-polymorphism/what-is-name-mangling-and-how-does-it-work'
  }
]