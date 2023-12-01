import SkillSection from './SkillSection';

const Skills = () => {
  return (
    <section
      id="skills"
      className="p-8 pt-20 h-screen w-full text-center bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950"
    >
      <div
        className={`border-emerald-400 min-h-[700px] h-fit bg-gradient-to-b from-neutral-900 to-neutral-950 justify-evenly flex flex-col rounded-lg border-y py-4 px-6 w-full relative shadow-lg shadow-black`}
      >
        <SkillSection label={'Core Skills'} type={'core'} />
        <SkillSection label={'Broad Skills'} type={'broad'} />
        <SkillSection label={'Intangibles'} type={'intangible'} />
      </div>
    </section>
  );
};

export default Skills;
