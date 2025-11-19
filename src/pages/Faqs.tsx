import Header from '../components/Header/Header'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Footer from '../components/Footer'

const Faqs = () => {
  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'I offer logo & branding, social media designs, thumbnails, CV/resume designs, stationery, and more.'
    },
    {
      question: 'How do I get started with you?',
      answer:
        'Just reach out via my contact form, email, or LinkedIn. Share your project details, and I’ll guide you through the next steps.'
    },
    {
      question: 'What is your typical turnaround time?',
      answer: 'Usually between 2–5 days, depending on the project size.'
    },
    {
      question: 'Can you design posts for any social media platform?',
      answer:
        'Yes — Instagram, Facebook, LinkedIn, YouTube, and more.'
    },
    {
      question: 'Do you also handle captions and hashtags?',
      answer:
        'I focus on design, but I can create editable templates where you can add your own captions.'
    },
    {
      question: 'Will my designs be in my brand colors and style?',
      answer:
        'Absolutely — I design everything based on your unique brand identity.'
    }
  ]

  const handleWhatsAppClick = () => {
    // Replace with your own WhatsApp number
    window.open('https://wa.me/923349313075', '_blank')
  }

  return (
    <>
      {/* Main FAQ content */}
      <div className="w-full flex flex-col items-center">
        <Header />

        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent mb-4 text-center my-10">
          Frequently Asked Questions
        </h1>

        <p className="text-center max-w-2xl mx-auto mb-8">
          Got questions? Browse the common questions below — or search to find an exact topic. 
          If you still need help, hit the contact CTA at the bottom.
        </p>

        <div className="w-full max-w-2xl ">
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className="font-semibold">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        <div className="text-center my-10">
          <p className="mb-4 font-medium">
            Still have questions? <br />
            Reach out and I’ll reply within 24–48 hours.
          </p>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(90deg, #670D7F, #851988, #D63D98)',
              color: '#fff',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '8px',
              padding: '10px 50px',
              '&:hover': {
                background: 'linear-gradient(90deg, #851988, #D63D98, #670D7F)'
              }
            }}
            onClick={handleWhatsAppClick}
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Full-width footer with no side padding */}
      <div className="w-full">
        <Footer />
      </div>
    </>
  )
}

export default Faqs