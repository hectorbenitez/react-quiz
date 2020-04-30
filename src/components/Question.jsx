import React, { useState } from 'react'
import _ from 'lodash'
import Swal from 'sweetalert2'

function Question ({ question, nextQuestion }) {
  const options = _.shuffle([question.answer, question.fail1, question.fail2])
  const [showTip, setShowTip] = useState(false)

  async function handleAnswer (option) {
    if (option === question.answer) {
      await Swal.fire({
        title: 'Right!',
        text: 'Yes it is',
        icon: 'success',
        confirmButtonText: 'Cool'
      })

      setShowTip(false)
      nextQuestion()
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Wrong',
        icon: 'error',
        confirmButtonText: ':('
      })
    }
  }

  function handleShowTip() {
    setShowTip(true)
  }

  return (
    <div className='row'>
      <div className='col-6 question-image-wrapper'>
        <img src={'/images/' + question.file} alt='' className='img-fluid' />
      </div>
      <div className='col-6'>
        {options.map(option => (
          <p>
            <button
              onClick={() => handleAnswer(option)}
              className='btn btn-orange btn-secondary btn-block rounded'
            >
              {option}
            </button>
          </p>
        ))}
        { showTip ? <div class='alert alert-secondary' role='alert'>
          Tip: { question.clue }
        </div> : <div class='alert alert-secondary' role='alert' onClick={handleShowTip}>Show Tip...</div>}
      </div>
    </div>
  )
}

export default Question
