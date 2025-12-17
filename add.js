        document.addEventListener('DOMContentLoaded', () => {
            const contentDiv = document.getElementById('content');
            const toggleButton = document.getElementById('toggleButton');
            const paragraph = document.getElementById('paragraphText');
            
            function initializeContent() {
                contentDiv.classList.remove('content-collapsed', 'content-expanded');
                contentDiv.style.height = ''; 

                const fullHeight = paragraph.scrollHeight;
                
                contentDiv.classList.add('content-collapsed');
                const collapsedHeight = contentDiv.offsetHeight;

                if (fullHeight > collapsedHeight + 5) {
                    toggleButton.classList.remove('hidden');
                    toggleButton.textContent = 'See More'; 
                    contentDiv.isCollapsed = true; 
                } else {
                    contentDiv.classList.remove('content-collapsed');
                    contentDiv.style.height = 'auto'; 
                    toggleButton.classList.add('hidden');
                }
            }

            function toggleContent() {
                const fullHeight = paragraph.scrollHeight;

                if (contentDiv.isCollapsed) {
                    contentDiv.style.height = `${fullHeight}px`;
                    
                    contentDiv.classList.remove('content-collapsed');
                    contentDiv.classList.add('content-expanded');
                    toggleButton.textContent = 'See Less'; 
                } else {
                    contentDiv.style.height = `${contentDiv.scrollHeight}px`; 
                    
                    void contentDiv.offsetHeight; 

                    contentDiv.style.height = '45px'; 
                    contentDiv.classList.remove('content-expanded');
                    contentDiv.classList.add('content-collapsed');

                    toggleButton.textContent = 'See More'; 
                }
                
                contentDiv.isCollapsed = !contentDiv.isCollapsed;
            }

            initializeContent();
            toggleButton.addEventListener('click', toggleContent);
        });