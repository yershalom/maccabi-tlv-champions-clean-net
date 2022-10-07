import * as React from 'react'

const Days = () => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(2015, 12, 9);
  const secondDate = new Date();
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

  return (
    <div style={{
      color: 'blue',
      fontSize: '5rem',
    }}>
      <div style={{
        textAlign: 'center',
      }}>
        Days without conceding a goal in the Champions League:
      </div>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        fontWeight: 'bold'
      }}>

        {diffDays}
      </div>
    </div>
  )
}

export default Days