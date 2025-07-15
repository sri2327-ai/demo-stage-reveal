// Generate American voice over script
const generateVoiceOver = async () => {
  const pageSummary = `Welcome to S10.AI - The AI That Charts and Staffs So You Don't Have To. 

Healthcare burnout is real. Clinicians spend over 4 hours daily on electronic health records, with 1 in 2 facing burnout and 30% patient no-show rates leaving staff understaffed, overwhelmed, and underpaid.

Meet your AI teammates: CRUSH, our Clinical Documentation AI that generates comprehensive SOAP notes in under 60 seconds with 99.9% accuracy, and BRAVO, our Patient Engagement AI that handles appointment scheduling, follow-ups, and reduces no-shows by 40%.

Our solution delivers real ROI: 2-3 hours saved per clinician daily, 40% reduction in no-shows, 95% patient satisfaction, and streamlined workflows that let you focus on what matters most - patient care.

Join leading healthcare organizations who trust S10.AI to transform their practice. Your next step is easy - try S10.AI today and reclaim your time to focus on healing.`;

  try {
    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/TX3LPaxmHKxFdv7VOQHJ', {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': 'sk_ea806c16d1ab6b905a17338ebc0c9b63daa26b793bbbf0d2'
      },
      body: JSON.stringify({
        text: pageSummary,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.7,        // More stable for professional tone
          similarity_boost: 0.8, // Higher similarity for natural sound
          style: 0.3,           // Slight style variation for more human feel
          use_speaker_boost: true
        }
      })
    });
    
    if (response.ok) {
      const audioBlob = await response.blob();
      
      // Convert blob to base64 for saving
      const reader = new FileReader();
      reader.onload = function() {
        const base64 = reader.result.split(',')[1];
        console.log('Generated audio base64:', base64.substring(0, 100) + '...');
        
        // Create download link
        const url = URL.createObjectURL(audioBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 's10ai-american-voiceover.mp3';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      };
      reader.readAsDataURL(audioBlob);
    } else {
      console.error('Failed to generate speech:', response.status);
    }
  } catch (error) {
    console.error('Error generating speech:', error);
  }
};

// Run the generation
generateVoiceOver();