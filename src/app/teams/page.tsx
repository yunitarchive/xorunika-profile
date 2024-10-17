import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import CardTeamMember from '../../components/CardTeamMember';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

interface TeamsPageProps {
  marketingTeam: TeamMember[];
  operationTeam: TeamMember[];
  techTeam: TeamMember[];
}

// Custom hook for rendering a team
const useRenderTeam = () => {
  const renderTeam = (team: TeamMember[], teamName: string) => (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{teamName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {team.map((member, index) => (
          <CardTeamMember
            key={`${teamName}-${member.name}-${index}`}
            name={member.name}
            title={member.title}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
  return renderTeam;
};

const TeamsPage: FC<TeamsPageProps> = function TeamsPage({ marketingTeam, operationTeam, techTeam }) {
  const renderTeam = useRenderTeam();

  return (
    <div className="container mx-auto p-4">
      {renderTeam(marketingTeam, 'Marketing Team')}
      {renderTeam(operationTeam, 'Operation Team')}
      {renderTeam(techTeam, 'Tech Team')}
    </div>
  );
};

// Add display name to the component
TeamsPage.displayName = 'TeamsPage';

// Fetch data during build time (Static Generation)
export const getStaticProps: GetStaticProps = async () => {
  const fetchTeamMembers = async (): Promise<TeamMember[]> => {
    const response = await fetch('https://randomuser.me/api/?results=8');
    const data = await response.json();

    return data.results.map((user: RandomUser) => ({
      name: `${user.name.first} ${user.name.last}`,
      title: user.location.city,
      description: user.email,
      image: user.picture.large,
    }));
  };

  const marketingTeam = await fetchTeamMembers();
  const operationTeam = await fetchTeamMembers();
  const techTeam = await fetchTeamMembers();

  return {
    props: {
      marketingTeam,
      operationTeam,
      techTeam,
    },
  };
};

export default TeamsPage;
