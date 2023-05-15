import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import CalendarUI from '@/components/ui/Calendar';

export const getServerSideProps = withPageAuth({ redirectTo: '/signin' });

export default function Calendar() {
  return (
    <>
      <div className="min-h-full">
        <header className="shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Upcoming Structured Sessions
            </h1>
          </div>
        </header>
        <main className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <CalendarUI />
        </main>
      </div>
    </>
  );
}
