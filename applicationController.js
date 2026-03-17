const { sendRecruiterEmail, sendCandidateEmail } = require('./emailService');

/**
 * Handles job application submissions
 */
const handleApplication = async (req, res) => {
    try {
        const { fullName, email, phone } = req.body;
        const job = typeof req.body.job === 'string' ? JSON.parse(req.body.job) : req.body.job;
        const cvFile = req.file;

        console.log('\n=== New Application Received ===');
        console.log('Candidate:', fullName);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Job:', job?.description || 'N/A');
        console.log('================================\n');

        // שליחה מקבילה של שני המיילים
        await Promise.all([
            sendCandidateEmail({ fullName, email, phone, job }),
            sendRecruiterEmail({ fullName, email, phone, job }, cvFile)
        ]);

        res.status(200).json({ 
            success: true, 
            message: 'Emails sent successfully' 
        });
        
    } catch (error) {
        console.error('❌ Error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to send emails',
            details: error.message 
        });
    }
};

module.exports = { handleApplication };
