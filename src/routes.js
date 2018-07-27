import AccountPage from './components/AccountPage'
import SpacesOverview from './components/SpacesOverview'
import AppIndex from './components/AppIndex'
import PersonalSettingsPage from './components/PersonalSettingsPage'
import CardSettingsPage from './components/CardSettingsPage'

export default [
  {
    path: '/transactions',
    component: AppIndex
  },
  {
    path: '/spaces',
    component: SpacesOverview
  },
  {
    path: '/account',
    component: AccountPage,
    routes: [
      {
        path: 'personal-settings',
        component: PersonalSettingsPage
      },
      {
        path: 'card-settings',
        component: CardSettingsPage
      }
    ]
  }
]
