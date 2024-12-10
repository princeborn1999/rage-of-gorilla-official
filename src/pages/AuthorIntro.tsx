
import React from 'react';

function AuthorIntro() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 text-gray-800 py-12 px-6">
      <div className="container mx-auto text-center">
        {/* Author Image */}
        <div className="mb-8">
          <img
            src="/path/to/your-image.jpg" // Replace with your image path
            alt="Author Image"
            className="w-48 h-48 mx-auto rounded-full border-4 border-amber-300"
          />
        </div>

        {/* Author Name */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Author: Aaron Prince</h2>
        
        {/* Introduction in Chinese */}
        <p className="text-xl text-gray-700 mb-6">
          我是一位漫畫家，專注於連載漫畫和獨立創作。我的作品風格多樣，並且在 Pixiv 和 Instagram 上擁有眾多粉絲。
        </p>
        <p className="text-xl text-gray-700 mb-6">
          您可以在我的 <a target="_blank" href="https://www.pixiv.net/users/52776176" className="underline hover:text-amber-600">Pixiv</a> 和 <a target="_blank" href="https://www.instagram.com/princeborn1999/" className="underline hover:text-amber-600">Instagram</a> 頁面查看我的作品。
        </p>
        <p className="text-lg text-gray-600">
          我目前正致力於連載漫畫，並在多個平台上發佈新作品。感謝大家的支持，我期待與更多的讀者分享我的創作。
        </p>

        {/* Introduction in English */}
        <p className="text-xl text-gray-700 mb-6 mt-8">
          I am a comic artist specializing in serialized and independent works. My style is diverse, and I have many fans on Pixiv and Instagram.
        </p>
        <p className="text-xl text-gray-700 mb-6">
          You can check out my works on my <a target="_blank" href="https://www.pixiv.net/users/52776176" className="underline hover:text-amber-600">Pixiv</a> and <a target="_blank" href="https://www.instagram.com/princeborn1999/" className="underline hover:text-amber-600">Instagram</a> pages.
        </p>
        <p className="text-lg text-gray-600">
          I am currently working on serialized comics and releasing new projects on various platforms. Thank you for your support, and I look forward to sharing my creations with more readers.
        </p>

        {/* Introduction in Japanese */}
        <p className="text-xl text-gray-700 mb-6 mt-8">
          私は漫画家で、連載と独立した作品を手掛けています。私のスタイルは多様で、PixivやInstagramで多くのファンがいます。
        </p>
        <p className="text-xl text-gray-700 mb-6">
          私の作品は、<a target="_blank" href="https://www.pixiv.net/users/52776176" className="underline hover:text-amber-600">Pixiv</a> と <a target="_blank" href="https://www.instagram.com/princeborn1999/" className="underline hover:text-amber-600">Instagram</a> でご覧いただけます。
        </p>
        <p className="text-lg text-gray-600">
          現在、連載漫画に取り組んでおり、様々なプラットフォームで新作を公開しています。皆様のご支援、誠にありがとうございます。これからも多くの読者と私の創作を共有できることを楽しみにしています。
        </p>
      </div>
    </div>
  )
}
export default AuthorIntro;
