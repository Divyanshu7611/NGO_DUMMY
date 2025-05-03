import { Heart, Users, Calendar } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f7fdfc] to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Our Mission</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Together, we can build a brighter future — by supporting education, strengthening communities, and bringing hope to those in need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all relative">
            <div className="bg-pink-100 dark:bg-pink-800/20 p-4 rounded-full mb-5 inline-block">
              <Heart className="h-8 w-8 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Humanitarian Aid</h3>
            <p className="text-muted-foreground mb-4">
              Delivering life-saving supplies and support to those impacted by poverty and crisis.
            </p>
            <span className="inline-block bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full">Support Now</span>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all relative">
            <div className="bg-green-100 dark:bg-green-800/20 p-4 rounded-full mb-5 inline-block">
              <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Community Building</h3>
            <p className="text-muted-foreground mb-4">
              Empowering local leaders and investing in long-term development for thriving neighborhoods.
            </p>
            <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">Get Involved</span>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all relative">
            <div className="bg-blue-100 dark:bg-blue-800/20 p-4 rounded-full mb-5 inline-block">
              <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Education Programs</h3>
            <p className="text-muted-foreground mb-4">
              Funding schools, scholarships, and learning spaces for underprivileged children.
            </p>
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">Donate Books</span>
          </div>
        </div>
      </div>
    </section>
  );
}
