import React from "react"
import Link from "next/link"

interface EyebrowProps {
  children: React.ReactNode
  center?: boolean
}

const COLORS = {
  cream: "#F3E9D9",
  creamDeep: "#ECDFC6",
  card: "#FBF6EB",
  ink: "#3B2E22",
  inkSoft: "#7E6B57",
  inkFaint: "#AC9A81",
  sagePale: "#E5E7D6",
  sageDeep: "#59654A",
  terra: "#AD6A4E",
  terraDeep: "#8A5039",
  gold: "#C99A4E",
  line: "#DECBA9",
  lineStrong: "#CBB289",
}

const shadow = "0 2px 0 rgba(59,46,34,0.05), 0 10px 28px rgba(59,46,34,0.09)"

function Flourish() {
  return (
    <div className='flex items-center gap-1'>
      ~{" "}
      <svg
        width='14'
        height='14'
        viewBox='0 0 24 24'
        fill={COLORS.terra}
        // style={{ margin: "0 auto" }}
      >
        <path d='M12 21s-7-4.5-9.5-9C.5 8 3 4 7 4c2 0 4 1 5 3 1-2 3-3 5-3 4 0 6.5 4 4.5 8-2.5 4.5-9.5 9-9.5 9z' />
      </svg>{" "}
      ~
    </div>
  )
}

function Eyebrow({ children, center = false }: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-2 text-[15px] font-semibold font-gaegu uppercase tracking-[0.14em] text-terra-deep ${center ? "justify-center" : ""}`}
    >
      <Flourish />
      {children}
    </div>
  )
}

const RECIPE_ROWS = [
  {
    title: "Creamy Garlic Pasta",
    meta: "20 mins · Dinner · Serves 2",
    fill: "#E4CFA6",
    saved: true,
  },
  {
    title: "Miso Soup",
    meta: "15 mins · Soup · Serves 2",
    fill: "#D9C9A8",
    saved: false,
  },
  {
    title: "Chocolate Chip Cookies",
    meta: "30 mins · Dessert · Makes 12",
    fill: "#C9A57C",
    saved: true,
  },
]

export default function Home() {
  return (
    <div className='min-h-screen w-full bg-cream text-ink'>
      <div className='max-w-6xl mx-auto px-10 pt-6 grid md:grid-cols-2 gap-10 items-center'>
        <div>
          <div className='mb-3.5 font-gaegu'>
            <Eyebrow>Your recipes, beautifully gathered</Eyebrow>
          </div>
          <h1
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 500,
              fontSize: 50,
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
            }}
          >
            Save recipes from most websites.
          </h1>
          <span className='font-gaegu italic text-terra-deep text-[22px] uppercase'>
            We'll keep only what’s worth your thyme! 🌿
          </span>
          <p
            className='mt-4 mb-7 max-w-md text-[16px] leading-relaxed'
            style={{ color: COLORS.inkSoft }}
          >
            <span className='logo logo-hero'>gathered pantry</span> whisks away
            the fluff to extract the essential ingredients and steps, so you can
            organize your favorite dishes in one cozy place.
          </p>
          <div className='flex gap-3.5 flex-wrap mb-6'>
            <Link
              className='px-6 py-3.5 rounded-[9px] text-[15px] font-semibold bg-terra text-light hover:bg-terra-deep'
              href='/signup'
            >
              Get started — it's free
            </Link>
            <Link
              className='px-6 py-3.5 rounded-[9px] text-[15px] text-ink font-semibold border-[1.5px]
             border-line-strong 
             hover:border-terra hover:text-terra-deep
             '
              href='/extract'
            >
              See how it works
            </Link>
          </div>
          <div
            className='flex items-center gap-3 text-[13px]'
            style={{ color: COLORS.inkSoft, fontFamily: "Inter, sans-serif" }}
          >
            <div className='flex'>
              {["E", "J", "M"].map((l, i) => (
                <div
                  key={l}
                  className='w-[30px] h-[30px] rounded-full flex items-center justify-center text-[11px] font-semibold'
                  style={{
                    background: COLORS.sagePale,
                    color: COLORS.sageDeep,
                    border: `2px solid ${COLORS.cream}`,
                    marginLeft: i === 0 ? 0 : -8,
                    fontFamily: "Fraunces, serif",
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
            <span style={{ color: COLORS.gold, letterSpacing: 1 }}>★★★★★</span>
            <span>Loved by home cooks</span>
          </div>
        </div>

        {/* hero illustration + floating app mock */}
        <div className='relative hidden md:block' style={{ height: 520 }}>
          <svg
            width='96'
            height='96'
            viewBox='0 0 100 100'
            className='absolute'
            style={{ top: -16, right: 26 }}
          >
            <circle
              cx='50'
              cy='50'
              r='46'
              fill='none'
              stroke={COLORS.terra}
              strokeWidth='1.2'
              strokeDasharray='2 4'
            />
            <circle
              cx='50'
              cy='50'
              r='38'
              fill='none'
              stroke={COLORS.terra}
              strokeWidth='1'
            />
            <path id='sealPath' d='M 50 12 A 38 38 0 1 1 49.9 12' fill='none' />
            <text
              fontFamily='Inter, sans-serif'
              fontSize='6.3'
              fill={COLORS.terraDeep}
              letterSpacing='2'
              fontWeight='600'
            >
              <textPath href='#sealPath' startOffset='2%'>
                CURATED · ORGANIZED · SAVED ·
              </textPath>
            </text>
            <path
              d='M44 55 c0-6 4-10 6-10 s6 4 6 10 -4 8-6 8 -6-2-6-8Z'
              fill='none'
              stroke={COLORS.sageDeep}
              strokeWidth='1.2'
            />
          </svg>

          <svg
            width='340'
            height='300'
            viewBox='0 0 340 300'
            className='absolute'
            style={{ left: -10, bottom: 0 }}
          >
            <g
              fill='none'
              stroke={COLORS.ink}
              strokeWidth='1.4'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path
                d='M40 150 C36 190 40 230 46 250 C50 262 90 262 94 250 C100 230 104 190 100 150 Z'
                fill={COLORS.card}
              />
              <path d='M40 150 C 66 158 74 158 100 150' strokeWidth='1.2' />
              <path d='M100 175 C 118 175 120 195 104 202' />
            </g>
            <g stroke={COLORS.sageDeep} strokeWidth='1.3' fill='none'>
              <path d='M70 150 C68 120 64 90 58 60' />
              <path d='M70 150 C74 118 80 92 92 66' />
              <path d='M70 150 C70 116 70 92 70 55' />
            </g>
            <circle
              cx='58'
              cy='55'
              r='9'
              fill={COLORS.card}
              stroke={COLORS.gold}
              strokeWidth='1.2'
            />
            <circle
              cx='70'
              cy='46'
              r='10'
              fill={COLORS.card}
              stroke={COLORS.terra}
              strokeWidth='1.2'
            />
            <circle
              cx='92'
              cy='58'
              r='8'
              fill={COLORS.card}
              stroke={COLORS.gold}
              strokeWidth='1.2'
            />
            <circle cx='58' cy='55' r='3' fill={COLORS.gold} />
            <circle cx='70' cy='46' r='3' fill={COLORS.terra} />
            <circle cx='92' cy='58' r='3' fill={COLORS.gold} />
            <rect
              x='10'
              y='245'
              width='180'
              height='14'
              rx='4'
              fill={COLORS.creamDeep}
              stroke={COLORS.ink}
              strokeWidth='1.2'
            />
            <ellipse
              cx='90'
              cy='235'
              rx='62'
              ry='24'
              fill='#F1DED2'
              stroke={COLORS.ink}
              strokeWidth='1.4'
            />
            <path
              d='M50 226 C 65 216 115 216 130 226'
              stroke={COLORS.terraDeep}
              strokeWidth='1.1'
              fill='none'
            />
            <path
              d='M55 234 C70 226 110 226 125 234'
              stroke={COLORS.terraDeep}
              strokeWidth='1'
              fill='none'
            />
            <rect
              x='205'
              y='150'
              width='46'
              height='60'
              rx='8'
              fill={COLORS.card}
              stroke={COLORS.ink}
              strokeWidth='1.3'
            />
            <rect
              x='200'
              y='142'
              width='56'
              height='14'
              rx='4'
              fill={COLORS.sagePale}
              stroke={COLORS.ink}
              strokeWidth='1.2'
            />
            <rect
              x='215'
              y='170'
              width='20'
              height='14'
              rx='2'
              fill='none'
              stroke={COLORS.terra}
              strokeWidth='1'
            />
            <path
              d='M275 260 C275 220 262 180 268 150 C272 132 296 130 300 148 C304 164 296 176 288 178'
              fill='none'
              stroke={COLORS.ink}
              strokeWidth='1.4'
            />
            <ellipse
              cx='278'
              cy='255'
              rx='26'
              ry='16'
              fill={COLORS.card}
              stroke={COLORS.ink}
              strokeWidth='1.4'
            />
            <circle cx='299' cy='149' r='2' fill={COLORS.ink} />
            <path d='M300 152 L310 150' stroke={COLORS.gold} strokeWidth='2' />
          </svg>

          <div
            className='absolute rounded-2xl p-5'
            style={{
              right: 0,
              top: 30,
              width: 400,
              background: COLORS.card,
              boxShadow: shadow,
              border: "1px solid #fff",
            }}
          >
            <div className='flex items-center justify-between mb-3.5'>
              <h4
                style={{
                  fontFamily: "Fraunces, serif",
                  fontWeight: 600,
                  fontSize: 19,
                  margin: 0,
                }}
              >
                My Recipes
              </h4>
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke={COLORS.ink}
                strokeWidth='1.5'
              >
                <circle cx='11' cy='11' r='7' />
                <path d='M20 20l-3.5-3.5' />
              </svg>
            </div>
            <div
              className='flex gap-4 text-xs pb-2.5 mb-1.5'
              style={{
                borderBottom: `1px solid ${COLORS.line}`,
                color: COLORS.inkFaint,
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span
                style={{
                  color: COLORS.terraDeep,
                  fontWeight: 600,
                  borderBottom: `2px solid ${COLORS.terraDeep}`,
                  paddingBottom: 9,
                  marginBottom: -11,
                }}
              >
                All Recipes
              </span>
              <span>Favorites</span>
              <span>Dinner</span>
              <span>Dessert</span>
            </div>
            {RECIPE_ROWS.map((r) => (
              <div
                key={r.title}
                className='flex items-center gap-3 py-2.5'
                style={{ borderBottom: `1px solid ${COLORS.line}` }}
              >
                <svg
                  width='44'
                  height='44'
                  viewBox='0 0 44 44'
                  className='rounded-[9px] flex-shrink-0'
                >
                  <rect width='44' height='44' rx='9' fill={r.fill} />
                </svg>
                <div className='flex-1 min-w-0'>
                  <h5
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontSize: 14,
                      fontWeight: 600,
                      margin: "0 0 2px",
                    }}
                  >
                    {r.title}
                  </h5>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 11,
                      color: COLORS.inkFaint,
                      margin: 0,
                    }}
                  >
                    {r.meta}
                  </p>
                </div>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill={r.saved ? COLORS.terra : "none"}
                  stroke={r.saved ? COLORS.terra : COLORS.inkFaint}
                  strokeWidth='1.6'
                >
                  <path d='M12 21s-7-4.5-9.5-9C.5 8 3 4 7 4c2 0 4 1 5 3 1-2 3-3 5-3 4 0 6.5 4 4.5 8-2.5 4.5-9.5 9-9.5 9z' />
                </svg>
              </div>
            ))}
            <button
              className='w-full mt-3.5 py-2.5 rounded-[9px] text-[13px] font-semibold flex items-center justify-center gap-2'
              style={{
                background: COLORS.terra,
                color: "#FBF3E9",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <svg
                width='13'
                height='13'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.5'
              >
                <path d='M12 5v14M5 12h14' />
              </svg>
              Add Recipe
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- MADE FOR HOME COOKS ---------------- */}
      <div
        className='mt-24 text-center py-10 px-10'
        style={{ background: COLORS.creamDeep }}
      >
        <Eyebrow center>Made for home cooks</Eyebrow>
        <h2
          className='mt-3 mb-1.5'
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 500,
            fontSize: 32,
          }}
        >
          Collect. Simplify. Savor.
        </h2>
        <p className='text-[15px]' style={{ color: COLORS.inkSoft }}>
          Spend less time scrolling, more time cooking.
        </p>
      </div>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <div className='max-w-5xl mx-auto px-10 mt-24 text-center'>
        <div className='grid md:grid-cols-3 gap-6'>
          {[
            {
              title: "Toss in a link",
              text: "Paste a link from most websites or food blogs.",
            },
            {
              title: "'Lettuce' do the prep work",
              text: "We slice out the ads and chop down long stories to serve you just the essential ingredients and steps.",
            },
            {
              title: "Relish your collection",
              text: "Keep all your favorite dishes beautifully organized.",
            },
          ].map((step, i) => (
            <div key={step.title}>
              <svg
                width='100%'
                height='150'
                viewBox='0 0 200 150'
                className='mb-5'
              >
                <rect
                  x='20'
                  y='20'
                  width='160'
                  height='110'
                  rx='8'
                  fill={COLORS.card}
                  stroke={COLORS.ink}
                  strokeWidth='1.4'
                />
                <line
                  x1='20'
                  y1='42'
                  x2='180'
                  y2='42'
                  stroke={COLORS.ink}
                  strokeWidth='1.2'
                />
                <circle cx='34' cy='31' r='2.5' fill={COLORS.terra} />
                <circle cx='44' cy='31' r='2.5' fill={COLORS.gold} />
                <circle cx='54' cy='31' r='2.5' fill={COLORS.sageDeep} />
                {i === 0 && (
                  <>
                    <rect
                      x='34'
                      y='60'
                      width='132'
                      height='18'
                      rx='4'
                      fill='none'
                      stroke={COLORS.lineStrong}
                      strokeWidth='1.2'
                    />
                    <text
                      x='42'
                      y='72'
                      fontFamily='Inter'
                      fontSize='9'
                      fill={COLORS.inkFaint}
                    >
                      https://cookingsite.com/…
                    </text>
                  </>
                )}
                {i === 1 && (
                  <>
                    <text
                      x='42'
                      y='66'
                      fontFamily='Fraunces'
                      fontStyle='italic'
                      fontSize='13'
                      fill={COLORS.ink}
                    >
                      Ingredients
                    </text>
                    <line
                      x1='42'
                      y1='82'
                      x2='132'
                      y2='82'
                      stroke={COLORS.line}
                      strokeWidth='1.2'
                    />
                    <line
                      x1='42'
                      y1='98'
                      x2='132'
                      y2='98'
                      stroke={COLORS.line}
                      strokeWidth='1.2'
                    />
                    <line
                      x1='42'
                      y1='114'
                      x2='110'
                      y2='114'
                      stroke={COLORS.line}
                      strokeWidth='1.2'
                    />
                  </>
                )}
                {i === 2 && (
                  <>
                    <rect
                      x='55'
                      y='18'
                      width='90'
                      height='98'
                      fill='#F1DED2'
                      opacity='0.5'
                    />
                    <text
                      x='100'
                      y='75'
                      fontFamily='Fraunces'
                      fontStyle='italic'
                      fontSize='14'
                      fill={COLORS.ink}
                      textAnchor='middle'
                    >
                      Recipes
                    </text>
                  </>
                )}
              </svg>
              <div
                className='w-[30px] h-[30px] rounded-full flex items-center justify-center mx-auto mb-3.5 text-[13px] font-bold'
                style={{
                  background: COLORS.gold,
                  color: COLORS.ink,
                  fontFamily: "Fraunces, serif",
                }}
              >
                {i + 1}
              </div>
              <h3
                style={{
                  fontFamily: "Fraunces, serif",
                  fontWeight: 600,
                  fontSize: 19,
                  margin: "0 0 8px",
                }}
              >
                {step.title}
              </h3>
              <p
                className='max-w-[250px] mx-auto text-[14px] leading-relaxed'
                style={{ color: COLORS.inkSoft }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- COZY KITCHEN SECTION ---------------- */}
      <div className='max-w-6xl mx-auto px-10 mt-28 grid md:grid-cols-2 gap-12 items-center'>
        <svg width='100%' viewBox='0 0 460 380'>
          <rect
            x='20'
            y='60'
            width='420'
            height='10'
            fill={COLORS.ink}
            opacity='0.85'
          />
          <rect
            x='30'
            y='20'
            width='46'
            height='40'
            rx='4'
            fill={COLORS.sagePale}
            stroke={COLORS.ink}
            strokeWidth='1.2'
          />
          <rect
            x='86'
            y='24'
            width='34'
            height='36'
            rx='4'
            fill={COLORS.card}
            stroke={COLORS.ink}
            strokeWidth='1.2'
          />
          <rect
            x='130'
            y='18'
            width='30'
            height='42'
            rx='4'
            fill='#F1DED2'
            stroke={COLORS.ink}
            strokeWidth='1.2'
          />
          <rect
            x='40'
            y='220'
            width='380'
            height='140'
            rx='10'
            fill={COLORS.card}
            stroke={COLORS.ink}
            strokeWidth='1.4'
          />
          <rect x='40' y='220' width='380' height='18' fill={COLORS.line} />
          <ellipse
            cx='150'
            cy='190'
            rx='60'
            ry='24'
            fill={COLORS.terra}
            stroke={COLORS.ink}
            strokeWidth='1.4'
          />
          <ellipse cx='150' cy='184' rx='52' ry='16' fill='#C9855F' />
          <ellipse
            cx='270'
            cy='200'
            rx='34'
            ry='18'
            fill={COLORS.card}
            stroke={COLORS.ink}
            strokeWidth='1.3'
          />
          <path
            d='M110 220 C114 190 118 170 112 150'
            stroke={COLORS.sageDeep}
            strokeWidth='1.3'
            fill='none'
          />
          <circle
            cx='108'
            cy='146'
            r='10'
            fill='none'
            stroke={COLORS.gold}
            strokeWidth='1.2'
          />
          <circle
            cx='120'
            cy='156'
            r='8'
            fill='none'
            stroke={COLORS.terra}
            strokeWidth='1.2'
          />
          <rect
            x='330'
            y='150'
            width='70'
            height='70'
            rx='6'
            fill={COLORS.creamDeep}
            stroke={COLORS.ink}
            strokeWidth='1.2'
          />
        </svg>

        <div>
          <Eyebrow>Your kitchen, your way</Eyebrow>
          <h2
            className='mt-3.5 mb-4'
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 500,
              fontSize: 36,
              lineHeight: 1.2,
            }}
          >
            A cozy home for every recipe you love.
          </h2>
          <p
            className='mb-6 max-w-md text-[15.5px] leading-relaxed'
            style={{ color: COLORS.inkSoft }}
          >
            From weeknight dinners to family favorites,{" "}
            <span className='logo logo-hero'>gathered pantry</span> keeps your
            recipes simple, organized, and always within reach.
          </p>
          <div className='flex gap-3.5 flex-wrap mb-4'>
            <button
              className='px-6 py-3.5 rounded-[9px] text-[15px] font-semibold'
              style={{
                background: COLORS.terra,
                color: "#FBF3E9",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Create your free account
            </button>
            <button
              className='px-6 py-3.5 rounded-[9px] text-[15px] font-semibold'
              style={{
                border: `1.5px solid ${COLORS.lineStrong}`,
                color: COLORS.ink,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Explore recipes
            </button>
          </div>
          <div
            className='flex items-center gap-2 text-[13px]'
            style={{ color: COLORS.inkSoft, fontFamily: "Inter, sans-serif" }}
          >
            <svg
              width='15'
              height='15'
              viewBox='0 0 24 24'
              fill='none'
              stroke={COLORS.sageDeep}
              strokeWidth='1.6'
            >
              <circle cx='12' cy='12' r='10' />
              <path d='M8 12l3 3 5-6' />
            </svg>
            It's souper easy.
          </div>

          <div className='flex justify-center mt-4'>
            <div
              className='w-[210px] text-center relative p-6'
              style={{
                background: COLORS.card,
                boxShadow: shadow,
                transform: "rotate(2deg)",
              }}
            >
              <div
                className='absolute inset-2 pointer-events-none'
                style={{ border: `1.5px dashed ${COLORS.lineStrong}` }}
              />
              <p className='font-gaegu uppercase italic text-[15px] leading-[1.5] m-0 mb-2'>
                Good food is even better when it's shared
              </p>
              <svg
                width='14'
                height='14'
                viewBox='0 0 24 24'
                fill={COLORS.terra}
                style={{ margin: "0 auto" }}
              >
                <path d='M12 21s-7-4.5-9.5-9C.5 8 3 4 7 4c2 0 4 1 5 3 1-2 3-3 5-3 4 0 6.5 4 4.5 8-2.5 4.5-9.5 9-9.5 9z' />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- FEATURED IN ---------------- */}
      {/* <div className='max-w-6xl mx-auto px-10 mt-28 pb-24 text-center'>
        <Eyebrow center>Featured in</Eyebrow>
        <div
          className='flex justify-center gap-12 flex-wrap mt-6'
          style={{
            fontFamily: "Fraunces, serif",
            fontSize: 18,
            color: COLORS.inkFaint,
            fontWeight: 500,
          }}
        >
          <span>the kitchn</span>
          <span>food52</span>
          <span>Minimalist Baker</span>
          <span>TASTY</span>
          <span>allrecipes!</span>
        </div>
      </div> */}
    </div>
  )
}
