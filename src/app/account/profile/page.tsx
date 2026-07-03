import { redirect } from "next/navigation";
import { ProfileSettingsForm } from "@/components/profile-settings-form";
import { createClient } from "@/lib/supabase/server";
import type { UserProfile } from "@/lib/types";

export const metadata = {
  title: "Perfil",
};

export default async function AccountProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirect=/account/profile");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle<UserProfile>();

  if (!profile) {
    redirect("/account");
  }

  return (
    <div>
      <h2 className="text-xl font-bold">Configuración del perfil</h2>
      <p className="mt-2 text-sm text-forge-muted">
        Los cambios se sincronizan con la app móvil.
      </p>
      <div className="mt-8">
        <ProfileSettingsForm profile={profile} email={user.email ?? ""} />
      </div>
    </div>
  );
}
