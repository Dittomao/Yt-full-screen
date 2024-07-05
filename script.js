function embedVideo() {
        const inputUrl = document.getElementById('videoUrlInput').value.trim();
            
                // Extract video ID from URL
                    const videoId = extractVideoId(inputUrl);
                        
                            if (videoId) {
                                    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                                            
                                                    // Create iframe element
                                                            const iframe = document.createElement('iframe');
                                                                    iframe.setAttribute('src', embedUrl);
                                                                            iframe.setAttribute('width', '100%');
                                                                                    iframe.setAttribute('height', '400');
                                                                                            iframe.setAttribute('frameborder', '0');
                                                                                                    iframe.setAttribute('allowfullscreen', '');
                                                                                                            
                                                                                                                    // Clear previous video (if any) and append new iframe
                                                                                                                            const videoContainer = document.getElementById('videoContainer');
                                                                                                                                    videoContainer.innerHTML = '';
                                                                                                                                            videoContainer.appendChild(iframe);
                                                                                                                                                } else {
                                                                                                                                                        alert('Invalid YouTube URL. Please enter a valid YouTube video URL.');
                                                                                                                                                            }
                                                                                                                                                            }

                                                                                                                                                            function extractVideoId(url) {
                                                                                                                                                                // Extract video ID from URL using regex
                                                                                                                                                                    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
                                                                                                                                                                        const match = url.match(regExp);
                                                                                                                                                                            
                                                                                                                                                                                if (match && match[2].length === 11) {
                                                                                                                                                                                        return match[2];
                                                                                                                                                                                            } else {
                                                                                                                                                                                                    return null;
                                                                                                                                                                                                        }
                                                                                                                                                                                                        }
                                                                                                                                                                                                        
}