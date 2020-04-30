import React, { useState } from 'react'
import './App.css'
import Question from './components/Question'
import Swal from 'sweetalert2'
import _ from 'lodash'

function App () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [questions] = useState(
    _.shuffle([
      {
        answer: 'The Rolling Stones',
        file: 'question1.jpg',
        fail1: 'The Beatles',
        fail2: 'Queen',
        clue: '...'
      },
      {
        answer: 'Nenúfares',
        file: 'question2.png',
        fail1: 'Una noche estrellada',
        fail2: 'La persistencia de la memoria',
        clue: '...'
      },
      {
        answer: 'Turaco',
        file: 'question3.png',
        fail1: 'Ave del paraíso',
        fail2: 'Cicinnurus regius',
        clue: '...'
      }
    ])
  )

  function nextQuestion () {
    if (currentIndex + 1 === questions.length) {
      Swal.fire({
        title: 'Done!'
      })
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div className='row py-5'>
      <main role='main' className='col inner cover'>
        <div className='row'>
          <div className='col header-orange text-center font-weight-bolder mb-3'>
            <h1>
              Guess Who? {currentIndex + 1}/{questions.length}
            </h1>
          </div>
        </div>
        <Question
          question={questions[currentIndex]}
          nextQuestion={nextQuestion}
        ></Question>
      </main>
    </div>
  )
}

export default App
