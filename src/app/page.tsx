import ApplicationContainer from '@/components/ui/application-container'
import ContentPanel from '@/components/ui/content-panel'
import NavigationPanel from '@/components/ui/navigation-panel'

export default function Home() {
  return (
    <ApplicationContainer>
      <NavigationPanel />
      <ContentPanel />
    </ApplicationContainer>
  )
}