import PageHeading from "@/components/PageHeading";

import useAuth from "@/hooks/useAuth";

const Settings = () => {
  const { session } = useAuth();

  return (
    <>
      <PageHeading
        title="Instellingen"
        subtitle={session.user?.username}
      />
    </>
  )
};

export default Settings;
