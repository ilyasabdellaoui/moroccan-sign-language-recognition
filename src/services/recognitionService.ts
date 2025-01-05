import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const recognitionService = {
  async processFrame(frame: File): Promise<string> {
    try {
      const formData = new FormData();
      formData.append('frame', frame);
      
      const response = await axios.post(`${API_BASE_URL}/process-frame/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.result;
    } catch (error) {
      console.error('Error processing frame:', error);
      throw new Error('Error processing frame');
    }
  },

  async processVideo(video: File): Promise<string> {
    try {
      const formData = new FormData();
      formData.append('video', video);

      const response = await axios.post(`${API_BASE_URL}/process-video/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.result;
    } catch (error) {
      console.error('Error processing video:', error);
      throw new Error('Error processing video');
    }
  },

  async convertTextToSign(text: string): Promise<string> {
    try {
      const response = await axios.post(`${API_BASE_URL}/convert-text-to-sign/`, { text });
      return response.data.result;
    } catch (error) {
      console.error('Error converting text to sign:', error);
      throw new Error('Error converting text to sign');
    }
  },
};