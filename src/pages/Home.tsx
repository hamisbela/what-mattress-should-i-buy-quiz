import React from 'react';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">What Mattress Should I Buy? - Quiz</h1>
        <Quiz />
      </section>

      <section id="guide" className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose lg:prose-lg mx-auto">
          <div className="mb-8">
            <p className="text-lg">
              If you're wondering, <strong>"What mattress should I buy?"</strong>, you're not alone! Choosing the perfect mattress can be overwhelming with so many options available. From memory foam to hybrid, innerspring to latex mattresses, finding the best mattress for your needs requires careful consideration. But don't worry – we've got you covered! Our interactive <strong>What Mattress Should I Buy? Quiz</strong> will help you narrow down your choices and find the ideal mattress for better sleep.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Take the "What Mattress Should I Buy?" Quiz?</h2>
            <p>
              With countless mattresses on the market, deciding on the right one can feel overwhelming. Whether you're a side sleeper, back sleeper, or combination sleeper, our <strong>What Mattress Should I Buy? Quiz</strong> is designed to match you with a mattress that fits your sleeping style, budget, and comfort preferences.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features Our Quiz Considers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mattress Type:</strong> Memory Foam, Hybrid, Innerspring, or Latex</li>
              <li><strong>Comfort Level:</strong> Firmness, support, and pressure relief</li>
              <li><strong>Sleep Position:</strong> Side, back, stomach, or combination</li>
              <li><strong>Budget:</strong> Find the perfect mattress within your price range</li>
              <li><strong>Special Needs:</strong> Back pain, temperature regulation, motion isolation</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Mattress Categories</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Best for Side Sleepers:</strong> Pressure-relieving mattresses with proper support</li>
              <li><strong>Best for Back Pain:</strong> Supportive mattresses with targeted lumbar support</li>
              <li><strong>Best for Hot Sleepers:</strong> Cooling mattresses with temperature regulation</li>
              <li><strong>Best for Couples:</strong> Motion-isolating mattresses for undisturbed sleep</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How the "What Mattress Should I Buy?" Quiz Works</h2>
            <p>
              Taking our quiz is quick and easy! Simply answer a few questions about your sleeping preferences, comfort needs, and budget, and we'll recommend the best mattresses for you. Our recommendations are based on extensive research and real-world testing.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Mattress Buying Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consider Trial Period:</strong> Look for mattresses with generous sleep trials</li>
              <li><strong>Check Warranty:</strong> Understand the warranty coverage and duration</li>
              <li><strong>Read Reviews:</strong> Learn from other customers' experiences</li>
              <li><strong>Compare Materials:</strong> Evaluate quality and durability of components</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Our Mattress Recommendations?</h2>
            <p>
              Our team consists of sleep experts and mattress specialists who stay up-to-date with the latest sleep technology and mattress innovations. We regularly update our <strong>What Mattress Should I Buy? Quiz</strong> to include new models and features, ensuring you get the most current recommendations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Mattress?</h2>
            <p>
              Don't waste hours researching – let our <strong>What Mattress Should I Buy? Quiz</strong> guide you to the perfect mattress. Whether you're buying your first mattress or upgrading your current one, we'll help you make an informed decision for better sleep.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}