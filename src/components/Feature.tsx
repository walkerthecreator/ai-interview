import { FeatureSteps } from "@/components/ui/feature-steps"

const features = [
    {
        step: 'Step 1',
        title: 'Choose your Tech Stack',
        content: 'Choose your tech stack by selecting the tools, frameworks, and libraries',
        image: "/choose-tech.png"
    },
    {
        step: 'Step 2',
        title: 'Give Interviewed',
        content: 'Get interviewed in your tech stack and put your skills to the test."',
        image: "/get-interviewed.png"
    },
    {
        step: 'Step 3',
        title: 'Get Insights',
        content: 'Gain insights into your strengths and identify areas for improvement."',
        image: "/score.png"
    },
]

export function FeatureStepsSection() {
    return (
        <FeatureSteps
            features={features}
            title="Your Journey Starts Here"
            autoPlayInterval={4000}
            imageHeight="h-[500px]"
        />
    )
}