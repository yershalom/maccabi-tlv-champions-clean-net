import * as React from 'react'
import Days from '../components/days'

const IndexPage = () => {
  return (
    <main style={{
      backgroundColor: 'yellow',
      height: '100vh',
    }}>
      <div>
        <div><Days/></div>
      </div>
    </main>
  )
}

export const Head = () => <title>Maccabi Tel Aviv Champions League Clean Net</title>

export default IndexPage