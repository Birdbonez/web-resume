import SkillSection from './SkillSection';

const Skills = () => {
  return (
    <section
      id="skills"
      className="p-8 pt-32 h-screen w-full text-center bg-neutral-950"
    >
      <div
        className={`border-emerald-400 min-h-[720px] bg-gradient-to-b from-neutral-900 to-neutral-950 justify-evenly flex flex-col rounded-lg border-y py-4 px-6 w-full relative shadow-inner shadow-black`}
      >
        <SkillSection label={'Core Skills'} type={'core'} />
        <SkillSection label={'Broad Skills'} type={'broad'} />
        <SkillSection label={'Intangibles'} type={'intangible'} />
      </div>
    </section>
  );
};

export default Skills;