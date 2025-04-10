import { google } from 'googleapis';
import { ContactFormData } from '@shared/schema';

// This function will save contact form data to Google Sheets
export async function saveContactToGoogleSheet(data: ContactFormData) {
  try {
    // To use this function, you'll need to provide:
    // 1. Google Service Account credentials 
    // 2. The ID of your Google Spreadsheet
    
    // Check if credentials are available
    if (!process.env.GOOGLE_CREDENTIALS) {
      console.error('Google credentials not found');
      throw new Error('Google Sheets API credentials not configured');
    }
    
    if (!process.env.SHEET_ID) {
      console.error('Google Sheet ID not found');
      throw new Error('Google Sheet ID not configured');
    }
    
    // Parse the credentials
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    
    // Create a new JWT client using the credentials
    const auth = new google.auth.JWT(
      credentials.client_email,
      undefined,
      credentials.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    );
    
    // Create the sheets API client
    const sheets = google.sheets({ version: 'v4', auth });
    
    // Format the data for insertion
    const values = [
      [
        new Date().toISOString(), // Timestamp
        data.name,
        data.email,
        data.phone,
        data.subject,
        data.message
      ]
    ];
    
    // Append the data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Sheet1!A:F', // Assuming the first sheet with columns A-F
      valueInputOption: 'RAW',
      requestBody: {
        values
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    throw error;
  }
}