import { useState } from 'react'

export default function useWizard(steps) {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div>useStep</div>
  )
}
