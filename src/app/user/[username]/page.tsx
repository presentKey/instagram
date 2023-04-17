import UserProfile from '@/components/UserProfile';
import UserPosts from '@/components/userPosts';
import { getUserForProfile } from '@/service/user';
import { notFound } from 'next/navigation';

type Props = { params: { username: string } };

export default async function UserPage({ params: { username } }: Props) {
  const user = await getUserForProfile(username);

  if (!user) {
    notFound();
  }

  return (
    <section className='w-full'>
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
}
