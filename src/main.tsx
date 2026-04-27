import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CafeInfo from './components/CafeInfo/CafeInfo'
import Notification from './components/Notification/Notification'
import VoteOptions from './components/VoteOptions/VoteOptions'
import VoteStats from './components/VoteStats/VoteStats'

const App = () => {
  return (
    <div>
      <CafeInfo />
      <Notification />
      <VoteOptions />
      <VoteStats />
    </div >
  );
    
 }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
