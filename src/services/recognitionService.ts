export const recognitionService = {
  async processFrame(frame: string): Promise<string> {
    // TODO: Implement API call to process frame
    return 'Sign detected: Hello';
  },

  async processVideo(video: File): Promise<string> {
    // TODO: Implement API call to process video
    return 'Video processed: Multiple signs detected';
  },

  async convertTextToSign(text: string): Promise<string> {
    // TODO: Implement API call to convert text
    return 'Text converted to sign language animations';
  }
};